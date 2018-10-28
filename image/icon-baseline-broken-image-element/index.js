import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineBrokenImageElement
 * @class IconBaselineBrokenImageElement
 * @extends {AoflElement}
 */
class IconBaselineBrokenImageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineBrokenImageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-broken-image';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineBrokenImageElement.is, IconBaselineBrokenImageElement);

export default IconBaselineBrokenImageElement;
