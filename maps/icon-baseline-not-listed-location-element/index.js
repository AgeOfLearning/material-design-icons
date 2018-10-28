import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineNotListedLocationElement
 * @class IconBaselineNotListedLocationElement
 * @extends {AoflElement}
 */
class IconBaselineNotListedLocationElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineNotListedLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-not-listed-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineNotListedLocationElement.is, IconBaselineNotListedLocationElement);

export default IconBaselineNotListedLocationElement;
