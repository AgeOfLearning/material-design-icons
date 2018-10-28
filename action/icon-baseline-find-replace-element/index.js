import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFindReplaceElement
 * @class IconBaselineFindReplaceElement
 * @extends {AoflElement}
 */
class IconBaselineFindReplaceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFindReplaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-find-replace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFindReplaceElement.is, IconBaselineFindReplaceElement);

export default IconBaselineFindReplaceElement;
