import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTocElement
 * @class IconBaselineTocElement
 * @extends {AoflElement}
 */
class IconBaselineTocElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTocElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-toc';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTocElement.is, IconBaselineTocElement);

export default IconBaselineTocElement;
