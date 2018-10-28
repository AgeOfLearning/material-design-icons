import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineThumbUpAltElement
 * @class IconBaselineThumbUpAltElement
 * @extends {AoflElement}
 */
class IconBaselineThumbUpAltElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineThumbUpAltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-thumb-up-alt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineThumbUpAltElement.is, IconBaselineThumbUpAltElement);

export default IconBaselineThumbUpAltElement;
