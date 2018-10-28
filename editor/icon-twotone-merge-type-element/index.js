import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMergeTypeElement
 * @class IconTwotoneMergeTypeElement
 * @extends {AoflElement}
 */
class IconTwotoneMergeTypeElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMergeTypeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-merge-type';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMergeTypeElement.is, IconTwotoneMergeTypeElement);

export default IconTwotoneMergeTypeElement;
