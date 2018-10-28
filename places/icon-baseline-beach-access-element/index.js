import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBeachAccessElement
 * @class IconBaselineBeachAccessElement
 * @extends {AoflElement}
 */
class IconBaselineBeachAccessElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBeachAccessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-beach-access';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBeachAccessElement.is, IconBaselineBeachAccessElement);

export default IconBaselineBeachAccessElement;
