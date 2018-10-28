import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderClearElement
 * @class IconOutlineBorderClearElement
 * @extends {AoflElement}
 */
class IconOutlineBorderClearElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderClearElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-clear';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderClearElement.is, IconOutlineBorderClearElement);

export default IconOutlineBorderClearElement;
