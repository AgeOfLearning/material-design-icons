import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLaunchElement
 * @class IconSharpLaunchElement
 * @extends {AoflElement}
 */
class IconSharpLaunchElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLaunchElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-launch';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLaunchElement.is, IconSharpLaunchElement);

export default IconSharpLaunchElement;
