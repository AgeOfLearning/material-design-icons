import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMyLocationElement
 * @class IconRoundMyLocationElement
 * @extends {AoflElement}
 */
class IconRoundMyLocationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMyLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-my-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMyLocationElement.is, IconRoundMyLocationElement);

export default IconRoundMyLocationElement;
