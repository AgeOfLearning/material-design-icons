import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewModuleElement
 * @class IconRoundViewModuleElement
 * @extends {AoflElement}
 */
class IconRoundViewModuleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewModuleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-module';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewModuleElement.is, IconRoundViewModuleElement);

export default IconRoundViewModuleElement;
