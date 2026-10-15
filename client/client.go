package client

import (
	"context"
	"sync"

	grpcdef "github.com/sologenic/com-fs-email-template-model"
	grpcclient "github.com/sologenic/com-fs-utils-internal-lib/go/grpc-client"
)

const (
	endpoint = "EMAIL_TEMPLATE_STORE"
)

var (
	client    grpcdef.EmailTemplateServiceClient
	grpClient *grpcclient.GRPCClient
	once      sync.Once
)

func initClient() {
	grpClient = grpcclient.InitClient(endpoint)
	client = grpcdef.NewEmailTemplateServiceClient(grpClient.Conn)
}

func Client() grpcdef.EmailTemplateServiceClient {
	once.Do(initClient)
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	once.Do(initClient)
	return grpClient.AuthCtx(ctx)
}
