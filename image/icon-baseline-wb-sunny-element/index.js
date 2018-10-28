import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWbSunnyElement
 * @class IconBaselineWbSunnyElement
 * @extends {AoflElement}
 */
class IconBaselineWbSunnyElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWbSunnyElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wb-sunny';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWbSunnyElement.is, IconBaselineWbSunnyElement);

export default IconBaselineWbSunnyElement;
