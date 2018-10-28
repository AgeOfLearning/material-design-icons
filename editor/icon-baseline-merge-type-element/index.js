import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMergeTypeElement
 * @class IconBaselineMergeTypeElement
 * @extends {AoflElement}
 */
class IconBaselineMergeTypeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMergeTypeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-merge-type';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMergeTypeElement.is, IconBaselineMergeTypeElement);

export default IconBaselineMergeTypeElement;
