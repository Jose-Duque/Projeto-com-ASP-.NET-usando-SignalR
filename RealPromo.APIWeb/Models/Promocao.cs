using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RealPromo.APIWeb.Models
{
    public class Promocao
    {
        public string Empresa { get; set; }

        public string Chamada { get; set; }

        public string Regras { get; set; }

        public string EnderecoUrl { get; set; }
    }
}
