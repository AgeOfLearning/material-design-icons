import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStorageElement
 * @class IconBaselineStorageElement
 * @extends {AoflElement}
 */
class IconBaselineStorageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStorageElement.is, IconBaselineStorageElement);

export default IconBaselineStorageElement;
