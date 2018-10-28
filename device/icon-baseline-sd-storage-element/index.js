import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSdStorageElement
 * @class IconBaselineSdStorageElement
 * @extends {AoflElement}
 */
class IconBaselineSdStorageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSdStorageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sd-storage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSdStorageElement.is, IconBaselineSdStorageElement);

export default IconBaselineSdStorageElement;
