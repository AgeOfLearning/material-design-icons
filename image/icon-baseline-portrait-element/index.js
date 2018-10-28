import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePortraitElement
 * @class IconBaselinePortraitElement
 * @extends {AoflElement}
 */
class IconBaselinePortraitElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePortraitElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-portrait';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePortraitElement.is, IconBaselinePortraitElement);

export default IconBaselinePortraitElement;
