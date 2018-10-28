import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNotListedLocationElement
 * @class IconRoundNotListedLocationElement
 * @extends {AoflElement}
 */
class IconRoundNotListedLocationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNotListedLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-not-listed-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNotListedLocationElement.is, IconRoundNotListedLocationElement);

export default IconRoundNotListedLocationElement;
