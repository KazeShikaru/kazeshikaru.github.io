var tool = function(hpIn,maxHpIn,mpIn,maxMPIn,attackIn,defenceIn,speedIn,lvlHpIn, lvlMpIn, lvlAttackIn,lvlDefenceIn,lvlSpeedIn){
        var t ={
            levelUp:function(){
                this.maxHP+=this.lvlHp;
                this.maxMp+=this.lvlMp;
                this.exp=0;
                this.maxExp*=1.2;
                this.attack+=this.lvlAttack;
                this.defence+=this.lvlDefence;
                this.speed+=this.lvlSpeed;

            },
            hp:hpIn,
            maxHp:maxHpIn,
            mp:mpIn,
            maxMp:maxMPIn,
            exp: 0,
            maxExp: 100,
            attack: attackIn,
            defence: defenceIn,
            speed:speedIn,
            lvlHp:lvlHpIn,
            lvlMp:lvlMpIn,
            lvlAttack:lvlAttackIn,
            lvlDefence:lvlDefenceIn,
            lvlSpeed:lvlSpeedIn,


        };
        return t;
};
