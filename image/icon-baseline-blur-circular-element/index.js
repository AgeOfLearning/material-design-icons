import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBlurCircularElement
 * @class IconBaselineBlurCircularElement
 * @extends {AoflElement}
 */
class IconBaselineBlurCircularElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBlurCircularElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-blur-circular';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBlurCircularElement.is, IconBaselineBlurCircularElement);

export default IconBaselineBlurCircularElement;
