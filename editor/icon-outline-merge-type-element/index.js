import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMergeTypeElement
 * @class IconOutlineMergeTypeElement
 * @extends {AoflElement}
 */
class IconOutlineMergeTypeElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMergeTypeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-merge-type';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMergeTypeElement.is, IconOutlineMergeTypeElement);

export default IconOutlineMergeTypeElement;
