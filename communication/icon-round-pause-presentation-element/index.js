import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPausePresentationElement
 * @class IconRoundPausePresentationElement
 * @extends {AoflElement}
 */
class IconRoundPausePresentationElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPausePresentationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pause-presentation';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPausePresentationElement.is, IconRoundPausePresentationElement);

export default IconRoundPausePresentationElement;
