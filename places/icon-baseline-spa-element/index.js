import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSpaElement
 * @class IconBaselineSpaElement
 * @extends {AoflElement}
 */
class IconBaselineSpaElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSpaElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-spa';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSpaElement.is, IconBaselineSpaElement);

export default IconBaselineSpaElement;
