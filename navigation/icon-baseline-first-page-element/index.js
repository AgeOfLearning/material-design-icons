import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFirstPageElement
 * @class IconBaselineFirstPageElement
 * @extends {AoflElement}
 */
class IconBaselineFirstPageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFirstPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-first-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFirstPageElement.is, IconBaselineFirstPageElement);

export default IconBaselineFirstPageElement;
