import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundEventElement
 * @class IconRoundEventElement
 * @extends {AoflElement}
 */
class IconRoundEventElement extends AoflElement {
  /**
   * Creates an instance of IconRoundEventElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-event';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundEventElement.is, IconRoundEventElement);

export default IconRoundEventElement;
