import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineClearElement
 * @class IconOutlineClearElement
 * @extends {AoflElement}
 */
class IconOutlineClearElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineClearElement.is, IconOutlineClearElement);

export default IconOutlineClearElement;
