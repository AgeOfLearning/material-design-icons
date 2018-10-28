import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSpeakerGroupElement
 * @class IconSharpSpeakerGroupElement
 * @extends {AoflElement}
 */
class IconSharpSpeakerGroupElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSpeakerGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-speaker-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSpeakerGroupElement.is, IconSharpSpeakerGroupElement);

export default IconSharpSpeakerGroupElement;
