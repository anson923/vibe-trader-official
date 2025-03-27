package server

import (
	"github.com/gofiber/fiber/v2"

	"vibe-trader-official/internal/database"
)

type FiberServer struct {
	*fiber.App

	db database.Service
}

func New() *FiberServer {
	server := &FiberServer{
		App: fiber.New(fiber.Config{
			ServerHeader: "vibe-trader-official",
			AppName:      "vibe-trader-official",
		}),

		db: database.New(),
	}

	return server
}
