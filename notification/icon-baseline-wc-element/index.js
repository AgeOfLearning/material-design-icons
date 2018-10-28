import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineWcElement
 * @class IconBaselineWcElement
 * @extends {AoflElement}
 */
class IconBaselineWcElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineWcElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-wc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineWcElement.is, IconBaselineWcElement);

export default IconBaselineWcElement;
