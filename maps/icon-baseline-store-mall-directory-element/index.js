import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStoreMallDirectoryElement
 * @class IconBaselineStoreMallDirectoryElement
 * @extends {AoflElement}
 */
class IconBaselineStoreMallDirectoryElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStoreMallDirectoryElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-store-mall-directory';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStoreMallDirectoryElement.is, IconBaselineStoreMallDirectoryElement);

export default IconBaselineStoreMallDirectoryElement;
