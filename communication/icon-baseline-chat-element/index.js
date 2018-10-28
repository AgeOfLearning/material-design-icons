import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineChatElement
 * @class IconBaselineChatElement
 * @extends {AoflElement}
 */
class IconBaselineChatElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineChatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-chat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineChatElement.is, IconBaselineChatElement);

export default IconBaselineChatElement;
