import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineFaceElement
 * @class IconBaselineFaceElement
 * @extends {AoflElement}
 */
class IconBaselineFaceElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineFaceElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-face';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineFaceElement.is, IconBaselineFaceElement);

export default IconBaselineFaceElement;
