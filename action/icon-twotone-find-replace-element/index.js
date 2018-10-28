import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFindReplaceElement
 * @class IconTwotoneFindReplaceElement
 * @extends {AoflElement}
 */
class IconTwotoneFindReplaceElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFindReplaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-find-replace';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFindReplaceElement.is, IconTwotoneFindReplaceElement);

export default IconTwotoneFindReplaceElement;
