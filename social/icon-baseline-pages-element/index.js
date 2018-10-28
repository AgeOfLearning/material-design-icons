import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePagesElement
 * @class IconBaselinePagesElement
 * @extends {AoflElement}
 */
class IconBaselinePagesElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePagesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-pages';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePagesElement.is, IconBaselinePagesElement);

export default IconBaselinePagesElement;
