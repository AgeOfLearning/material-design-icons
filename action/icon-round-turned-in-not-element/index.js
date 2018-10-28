import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTurnedInNotElement
 * @class IconRoundTurnedInNotElement
 * @extends {AoflElement}
 */
class IconRoundTurnedInNotElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTurnedInNotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-turned-in-not';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTurnedInNotElement.is, IconRoundTurnedInNotElement);

export default IconRoundTurnedInNotElement;
