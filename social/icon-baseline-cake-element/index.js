import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCakeElement
 * @class IconBaselineCakeElement
 * @extends {AoflElement}
 */
class IconBaselineCakeElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCakeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cake';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCakeElement.is, IconBaselineCakeElement);

export default IconBaselineCakeElement;
