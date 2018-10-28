import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLooks5Element
 * @class IconBaselineLooks5Element
 * @extends {AoflElement}
 */
class IconBaselineLooks5Element extends AoflElement {
  /**
   * Creates an instance of IconBaselineLooks5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-looks-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLooks5Element.is, IconBaselineLooks5Element);

export default IconBaselineLooks5Element;
