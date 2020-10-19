using Microsoft.AspNetCore.SignalR;
using RealPromo.APIWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealPromo.APIWeb.Hubs
{
    // RPC chamada de função
    public class PromoHub : Hub
    {
        /*
         * Client(JS) -> Hub(C#) -(C# Cadastra)
         * Hub(C#) -> Client(JS) - (JS Recebe)
         */
        public async Task CadastrarPromocao(Promocao promocao)
        {
            //Notificar Caller - Cadastro realizado com sucesso
            await Clients.Caller.SendAsync("CadastroSucesso");

            //Notificar Promoção chegou
            await Clients.Others.SendAsync("ReceberPromocao", promocao);
        }

    }
}
