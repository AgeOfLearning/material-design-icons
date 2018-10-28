import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTurnedInElement
 * @class IconRoundTurnedInElement
 * @extends {AoflElement}
 */
class IconRoundTurnedInElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTurnedInElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-turned-in';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTurnedInElement.is, IconRoundTurnedInElement);

export default IconRoundTurnedInElement;
