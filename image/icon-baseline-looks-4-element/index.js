import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLooks4Element
 * @class IconBaselineLooks4Element
 * @extends {AoflElement}
 */
class IconBaselineLooks4Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineLooks4Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-looks-4';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLooks4Element.is, IconBaselineLooks4Element);

export default IconBaselineLooks4Element;
