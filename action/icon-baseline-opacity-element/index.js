import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineOpacityElement
 * @class IconBaselineOpacityElement
 * @extends {AoflElement}
 */
class IconBaselineOpacityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineOpacityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-opacity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineOpacityElement.is, IconBaselineOpacityElement);

export default IconBaselineOpacityElement;
