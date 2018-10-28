import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCloseElement
 * @class IconBaselineCloseElement
 * @extends {AoflElement}
 */
class IconBaselineCloseElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCloseElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-close';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCloseElement.is, IconBaselineCloseElement);

export default IconBaselineCloseElement;
