package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-email-template-model"
	grpcclient "github.com/sologenic/com-fs-utils-lib/go/grpc-client"
)

const (
	endpoint = "EMAIL_TEMPLATE_STORE"
)

var (
	client    grpcdef.EmailTemplateServiceClient
	grpClient *grpcclient.GRPCClient
)

func initClient() {
	grpClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewEmailTemplateServiceClient(grpClient.Conn)
}

func Client() grpcdef.EmailTemplateServiceClient {
	if client == nil {
		initClient()
	}
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	if grpClient == nil {
		initClient()
	}
	return grpClient.AuthCtx(ctx)
}
