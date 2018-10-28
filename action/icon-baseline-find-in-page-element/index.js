import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFindInPageElement
 * @class IconBaselineFindInPageElement
 * @extends {AoflElement}
 */
class IconBaselineFindInPageElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFindInPageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-find-in-page';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFindInPageElement.is, IconBaselineFindInPageElement);

export default IconBaselineFindInPageElement;
