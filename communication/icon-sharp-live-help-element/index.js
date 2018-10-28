import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLiveHelpElement
 * @class IconSharpLiveHelpElement
 * @extends {AoflElement}
 */
class IconSharpLiveHelpElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLiveHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-live-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLiveHelpElement.is, IconSharpLiveHelpElement);

export default IconSharpLiveHelpElement;
