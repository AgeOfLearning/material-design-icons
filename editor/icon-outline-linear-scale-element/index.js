import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLinearScaleElement
 * @class IconOutlineLinearScaleElement
 * @extends {AoflElement}
 */
class IconOutlineLinearScaleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLinearScaleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-linear-scale';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLinearScaleElement.is, IconOutlineLinearScaleElement);

export default IconOutlineLinearScaleElement;
