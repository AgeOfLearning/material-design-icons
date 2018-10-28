import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTransformElement
 * @class IconBaselineTransformElement
 * @extends {AoflElement}
 */
class IconBaselineTransformElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTransformElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-transform';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTransformElement.is, IconBaselineTransformElement);

export default IconBaselineTransformElement;
