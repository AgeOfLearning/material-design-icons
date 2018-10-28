import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLensElement
 * @class IconBaselineLensElement
 * @extends {AoflElement}
 */
class IconBaselineLensElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLensElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-lens';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLensElement.is, IconBaselineLensElement);

export default IconBaselineLensElement;
