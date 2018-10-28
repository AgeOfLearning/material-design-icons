import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewAgendaElement
 * @class IconRoundViewAgendaElement
 * @extends {AoflElement}
 */
class IconRoundViewAgendaElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewAgendaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-agenda';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewAgendaElement.is, IconRoundViewAgendaElement);

export default IconRoundViewAgendaElement;
