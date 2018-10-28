import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineClearAllElement
 * @class IconBaselineClearAllElement
 * @extends {AoflElement}
 */
class IconBaselineClearAllElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineClearAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-clear-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineClearAllElement.is, IconBaselineClearAllElement);

export default IconBaselineClearAllElement;
