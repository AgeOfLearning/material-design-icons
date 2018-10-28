import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCastElement
 * @class IconBaselineCastElement
 * @extends {AoflElement}
 */
class IconBaselineCastElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCastElement.is, IconBaselineCastElement);

export default IconBaselineCastElement;
