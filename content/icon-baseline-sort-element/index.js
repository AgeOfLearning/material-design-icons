import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSortElement
 * @class IconBaselineSortElement
 * @extends {AoflElement}
 */
class IconBaselineSortElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSortElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sort';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSortElement.is, IconBaselineSortElement);

export default IconBaselineSortElement;
