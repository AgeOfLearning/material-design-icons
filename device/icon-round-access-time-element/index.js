import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAccessTimeElement
 * @class IconRoundAccessTimeElement
 * @extends {AoflElement}
 */
class IconRoundAccessTimeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAccessTimeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-access-time';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAccessTimeElement.is, IconRoundAccessTimeElement);

export default IconRoundAccessTimeElement;
